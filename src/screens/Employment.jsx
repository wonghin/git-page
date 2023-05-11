import { Title, Space, Stack, Group } from '@mantine/core'
import React from 'react'
import { TimeLine } from '../components/TimeLIine'

export const Employment = () => {
    return (
        <>
            <Group align={'end'}>
                <Title fz={50}> Employment</Title>
                {/* <Text fw={500}>(From now to the past)</Text> */}

            </Group>
            <Stack align={'center'}>
                <Space h={'lg'} />
                <TimeLine />

            </Stack>
        </>
    )
}
