import { Button, Divider, Flex, Input, Paper, Stack, Text } from '@mantine/core';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
const schema = yup.object({
    text: yup.string().required(),
}).required();


let rerender = 0
export const Todo = () => {

    const [data, setData] = useState([])
    const { handleSubmit: handle, register, resetField, setFocus, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = useCallback((obj) => {
        setData([
            ...data,
            { id: uuidv4(), text: obj.text }
        ])
        resetField('text')
        setFocus('text')
        console.log('submit');
    }, [data])


    const handlerDelete = useCallback((value) => {
        setData(
            data.filter(d => value['id'] !== d.id)
        )
        console.log('delete');


    }, [data])

    rerender++
    return (
        <>
            <Text>({rerender / 2})</Text>
            <Stack>
                {
                    data && data.map((value) =>
                        <Paper key={value.id} sx={{ display: 'flex' }}>
                            <Text >{value.text}</Text>
                            <Button p={0} onClick={() => {
                                handlerDelete(value)
                            }}>Delete</Button>
                        </Paper>
                    )
                }
                <Input {...register('text')} />
                <ErrorMessage
                    errors={errors}
                    name="text"
                    render={({ message }) => <Text color='red'>{message}</Text>}
                />


            </Stack>

            <Button onClick={handle(onSubmit)}>Submit</Button>
        </>
    )
}