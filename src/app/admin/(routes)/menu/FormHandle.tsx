'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { positionMenu } from '@/constants';
import { TMenu } from '@/type';
import { EPositionMenu } from '@/type/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface FormHandleProps {
    data?: TMenu;
}

const formShema = z.object({
    label: z.string(),
    path: z.string(),
    position: z
        .enum([EPositionMenu.MAIN_MENU, EPositionMenu.FOOTER_MENU])
        .optional(),
});

const FormHandle: React.FC<FormHandleProps> = () => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            position: undefined,
        },
    });

    const handleSubmit = async (formData: z.infer<typeof formShema>) => {
        console.log('Creating menu:', formData);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="mb-10"
                >
                    <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Position</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {positionMenu.map((item) => (
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
                                {form.formState.errors.position && (
                                    <p className="text-destructive">
                                        {form.formState.errors.position.message}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Label's menu"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="path"
                        render={({ field }) => (
                            <FormItem className="mb-3">
                                <FormLabel>Path</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Path's menu"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-between">
                        <Button
                            type="submit"
                            variant={'secondary'}
                            className="w-32"
                        >
                            Update
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default FormHandle;
