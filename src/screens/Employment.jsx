import { Title, Grid, Space, Text, Stack, Box, useMantineTheme, Group } from '@mantine/core'
import React from 'react'
import HoverSpringMotion from '../components/HoverSpringMotion/HoverSpringMotion'
import { ImageModal } from '../components/ImageModal'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
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
