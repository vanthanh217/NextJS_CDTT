'use client';

import clsx from 'clsx';
import { ImagesIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageUploadProps {
    className?: string;
    type?: 'product' | 'blog' | 'avatar' | 'default';
    field: {
        onChange: (value: string[] | string) => void;
        value: string[] | string;
    };
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    className,
    type = 'default',
    field,
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const initialImages = Array.isArray(field.value)
        ? field.value
        : [field.value];
    const [uploadedImages, setUploadedImages] = useState<string[]>(
        initialImages || [],
    );
    const [isDragging, setIsDragging] = useState<boolean>(false);

    useEffect(() => {
        const newImages = Array.isArray(field.value)
            ? field.value
            : [field.value];
        setUploadedImages(newImages || []);
    }, [field.value]);

    const handleClickImage = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            const newImages = filesArray.map((file) =>
                URL.createObjectURL(file),
            );

            let updatedImages: string[] = [];
            if (type === 'product') {
                updatedImages = [...uploadedImages, ...newImages];
            } else {
                updatedImages = newImages.slice(0, 1);
            }

            setUploadedImages(updatedImages);

            field.onChange(
                type === 'product' ? updatedImages : updatedImages[0],
            );
        }
    };

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        setIsDragging(false);

        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            const newImages = Array.from(files).map((file) =>
                URL.createObjectURL(file),
            );

            let updatedImages: string[] = [];
            if (type === 'product') {
                updatedImages = [...uploadedImages, ...newImages];
            } else {
                updatedImages = newImages.slice(0, 1);
            }

            setUploadedImages(updatedImages);

            field.onChange(
                type === 'product' ? updatedImages : updatedImages[0],
            );
        }
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleRemoveImage = (image: string) => {
        const updatedImages = uploadedImages.filter((img) => img !== image);
        setUploadedImages(updatedImages);

        field.onChange(
            type === 'product' ? updatedImages : updatedImages[0] || '',
        );
    };

    return (
        <div className={clsx('cursor-pointer', className)}>
            {/* Input */}
            <div
                className={clsx(
                    'flex w-full items-center justify-center rounded-md border-2 border-dashed py-3',
                    isDragging
                        ? 'border-sky-500 bg-sky-50'
                        : 'border-dashboadBorder',
                )}
                onClick={handleClickImage}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
            >
                <input
                    type="file"
                    name="file"
                    className="hidden"
                    multiple={type === 'product'}
                    ref={inputRef}
                    onChange={handleFileChange}
                />
                <div className="flex flex-col items-center">
                    <ImagesIcon className="text-gray-400" />
                    <p className="font-medium">
                        <span className="text-sky-500">Click to upload</span> or
                        drag and drop.
                    </p>
                    <span className="text-sm font-medium text-[#A3A3A3]">
                        JGP, JPEG, PNG, WEBP less than 1MB
                    </span>
                </div>
            </div>
            {/* Show Image */}
            <div
                className={clsx(
                    'mt-4 grid',
                    type === 'product' ? 'grid-cols-4 gap-4' : 'grid-cols-1',
                )}
            >
                {uploadedImages.map((image, index) =>
                    image ? (
                        <div key={index} className="relative">
                            <div
                                className={twMerge(
                                    'overflow-hidden rounded-lg',
                                    type === 'avatar'
                                        ? 'mx-auto size-[250px] rounded-full'
                                        : '',
                                )}
                            >
                                <Image
                                    src={image}
                                    alt={`uploaded-${index}`}
                                    width={160}
                                    height={125}
                                    className={twMerge(
                                        'h-full w-full object-cover',
                                        type === 'product'
                                            ? 'max-h-[125px]'
                                            : 'max-h-[175px]',
                                        type === 'avatar' ? 'max-h-full' : '',
                                    )}
                                />
                            </div>
                            <button
                                onClick={() => handleRemoveImage(image)}
                                className="absolute -right-3 -top-2 rounded-full bg-destructive p-1 text-white"
                            >
                                <XIcon size={18} />
                            </button>
                        </div>
                    ) : null,
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
