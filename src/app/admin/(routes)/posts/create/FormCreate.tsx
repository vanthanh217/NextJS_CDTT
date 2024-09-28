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
import { status } from '@/constants';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import ImageUpload from '@/components/common/ImageUpload';
import { EStatus } from '@/type/enums';

const formShema = z.object({
    title: z.string().nonempty('Title is required'),
    thumbnail: z.string(),
    slug: z.string(),
    topicId: z.number().refine((value) => value !== undefined, {
        message: 'Topic is required',
    }),
    desc: z.string(),
    content: z.string(),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
    createAt: z.date(),
});

const topics: { id: number; name: string }[] = [
    {
        id: 1,
        name: 'AI',
    },
    {
        id: 2,
        name: 'Game',
    },
];

function FormCreate() {
    const editorRef = useRef<Editor | unknown>(null);

    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            title: '',
            topicId: 0,
            thumbnail: '',
            desc: '',
            content: '',
            status: undefined,
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
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>
                                            Content page title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Content page title"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.formState.errors.title && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.title
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
                                            Content page Description
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Content page description"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>
                                            Content page Detail
                                        </FormLabel>
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
                                        <FormLabel>
                                            Content page Image
                                        </FormLabel>
                                        <FormControl>
                                            <ImageUpload
                                                type="blog"
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
                                name="topicId"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>
                                            Content page Topic
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={
                                                    field.value
                                                        ? field.value.toString()
                                                        : undefined
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select topic" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {topics.map((item) => (
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
                                        {form.formState.errors.topicId && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors
                                                        .topicId.message
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
                                                    {status.map((item) => (
                                                        <SelectItem
                                                            key={item.value}
                                                            value={item.value}
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    ))}
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
