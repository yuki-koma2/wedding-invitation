'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";

const UserSchema = z.object({
    name: z.string().min(1, '名前は必須です'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    age: z.number().int().nonnegative().min(1, '年齢は1以上でなければなりません'),
});

type UserFormInputs = z.infer<typeof UserSchema>;


export default function UserFormWithReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormInputs>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
        // サーバーにデータを送信する処理
        console.log('送信データ:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>名前:</label>
                <input type="text" {...register('name')} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>
            <div>
                <label>メールアドレス:</label>
                <input type="email" {...register('email')} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <div>
                <label>年齢:</label>
                <input type="number" {...register('age', { valueAsNumber: true })} />
                {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
            </div>
            <button type="submit">送信</button>
        </form>
    );
}