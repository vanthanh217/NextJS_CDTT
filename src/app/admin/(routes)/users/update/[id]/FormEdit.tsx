'use client';

import { TUser } from '@/type';
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
import { roles, status } from '@/constants';
import ImageUpload from '@/components/common/ImageUpload';
import { EStatus } from '@/type/enums';

const formShema = z.object({
    fullname: z.string().nonempty('Fullname is required'),
    username: z.string(),
    phoneNumber: z.string(),
    email: z.string().nonempty('Email is required'),
    thumbnail: z.string(),
    role: z.string().nonempty('Role is required'),
    status: z.enum([EStatus.ACTIVE, EStatus.INACTIVE]).optional(),
});

const FormEdit = ({ data }: { data: TUser }) => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            fullname: data.fullname,
            username: data.username,
            phoneNumber: data.phoneNumber,
            email: data.email,
            thumbnail: data.thumbnail,
            role: data.role,
            status: data.status,
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
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Fullname</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Fullname"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.formState.errors.fullname && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors
                                                        .fullname.message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email address"
                                                {...field}
                                            />
                                        </FormControl>
                                        {form.formState.errors.email && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.email
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Username"
                                                {...field}
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
                                        <FormLabel>Avatar</FormLabel>
                                        <FormControl>
                                            <ImageUpload
                                                type="avatar"
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
                                name="role"
                                render={({ field }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {roles.map((item) => (
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
                                        {form.formState.errors.role && (
                                            <p className="text-destructive">
                                                {
                                                    form.formState.errors.role
                                                        .message
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
};

export default FormEdit;
