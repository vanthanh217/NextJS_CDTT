'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { productStatus } from '@/constants';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import ImageUpload from '@/components/common/ImageUpload';
import { EProductStatus } from '@/type/enums';

const formShema = z.object({
    name: z.string().nonempty('Name is required'),
    thumbnail: z.array(z.string()).nonempty('At least one image is required'),
    brandId: z.string().nonempty('Brand is required'),
    categoryId: z.string().nonempty('Category is required'),
    desc: z.string(),
    detail: z.string(),
    price: z.number().min(0, 'Price must be >= 0'),
    status: z.enum([EProductStatus.ACTIVE, EProductStatus.INACTIVE]).optional(),
    createAt: z.date(),
});

const brands: { id: number; name: string }[] = [
    {
        id: 1,
        name: 'Asus',
    },
    {
        id: 2,
        name: 'DareU',
    },
    {
        id: 3,
        name: 'Logitech',
    },
];

const categories: { id: number; name: string }[] = [
    {
        id: 1,
        name: 'Keyboard',
    },
    {
        id: 2,
        name: 'Mouse',
    },
    {
        id: 3,
        name: 'Headphone',
    },
    {
        id: 4,
        name: 'Smart Wacth',
    },
    {
        id: 5,
        name: 'Smart Band',
    },
];

function FormCreate() {
    const editorRef = useRef<Editor | unknown>(null);

    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: '',
            brandId: '',
            categoryId: '',
            thumbnail: [''],
            desc: '',
            detail: '',
            price: 0,
        },
    });

    const handleSubmit = (data: z.infer<typeof formShema>) => {
        console.log(data);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="mb-10"
                >
                    <div className="flex gap-x-7">
                        <div className="basis-8/12">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Product's Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Product's name"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.formState.errors.name && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.name
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>
                                            Product's Description
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Product's description"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="detail"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Product's Detail</FormLabel>
                                        <FormControl>
                                            <Editor
                                                apiKey={
                                                    process.env
                                                        .NEXT_PUBLIC_EDITOR_API_KEY
                                                }
                                                initialValue={field.value}
                                                onInit={(_, editor) =>
                                                    (editorRef.current = editor)
                                                }
                                                init={{
                                                    font_size_formats:
                                                        '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
                                                    statusbar: false,
                                                    height: 350,
                                                    plugins: [
                                                        'advlist',
                                                        'autolink',
                                                        'lists',
                                                        'link',
                                                        'charmap',
                                                        'preview',
                                                        'searchreplace',
                                                        'visualblocks',
                                                        'code',
                                                        'insertdatetime',
                                                        'table',
                                                        'wordcount',
                                                    ],
                                                    toolbar:
                                                        'undo redo | fontselect fontsize | blocks | bold italic forecolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat',
                                                    content_style:
                                                        'body { font-size:14pt } p {margin: 0 8px 0;} h1, h2, h3, h4, h5, h6, ul, o {margin: 0 10px 0;}',
                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="thumbnail"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Product's Image</FormLabel>
                                        <FormControl>
                                            <ImageUpload
                                                type="product"
                                                field={{
                                                    ...field,
                                                    value: Array.isArray(
                                                        field.value,
                                                    )
                                                        ? field.value
                                                        : [],
                                                    onChange: (
                                                        value:
                                                            | string[]
                                                            | string,
                                                    ) => {
                                                        if (
                                                            Array.isArray(value)
                                                        ) {
                                                            field.onChange(
                                                                value,
                                                            );
                                                        } else {
                                                            field.onChange([
                                                                value,
                                                            ]);
                                                        }
                                                    },
                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="basis-4/12">
                            <FormField
                                control={form.control}
                                name="brandId"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Product's Brand</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select brand" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {brands.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id.toString()}
                                                        >
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {form.formState.errors.brandId && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors
                                                        .brandId.message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>
                                            Product's Category
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {categories.map((item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id.toString()}
                                                        >
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {form.formState.errors.categoryId && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors
                                                        .categoryId.message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {productStatus.map(
                                                        (item) => (
                                                            <SelectItem
                                                                key={item.value}
                                                                value={
                                                                    item.value
                                                                }
                                                            >
                                                                {item.label}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        {form.formState.errors.status && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.status
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Product's Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Product's price"
                                                {...field}
                                                onChange={(e) => {
                                                    const value =
                                                        e.target.value;
                                                    field.onChange(
                                                        value
                                                            ? parseFloat(value)
                                                            : 0,
                                                    );
                                                }}
                                            />
                                        </FormControl>
                                        {form.formState.errors.price && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.price
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                variant={'secondary'}
                                className="w-24"
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default FormCreate;
