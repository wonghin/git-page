import { Title, Grid, Space, Text, Stack, Box, useMantineTheme } from '@mantine/core'
import React from 'react'
import { useDisclosure, useMediaQuery, useScrollLock } from '@mantine/hooks'
import HoverSpringMotion from '../components/HoverSpringMotion/HoverSpringMotion'
import { ImageModal } from '../components/ImageModal'
import { ScrollFadeIn } from '../components/Animated/ScrollFadeIn'
import { ScrollFadeLeft } from '../components/Animated/ScollFadeLeft'


const Image = ({ openArray, index }) => {
    return (
        <>
            <HoverSpringMotion image={require(`../assets/cat${index}.jpg`)} open={openArray[index][1].open} />
            <ImageModal opened={openArray[index][0].valueOf()} open={openArray[index][1].open} close={openArray[index][1].close} image={require(`../assets/cat${index}.jpg`)} index={undefined} />
        </>
    )
}



export const About = () => {
    // const targetRef = useRefStore()
    const theme = useMantineTheme()
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);
    const open1 = useDisclosure(false)
    const open2 = useDisclosure(false)
    const open3 = useDisclosure(false)
    const open4 = useDisclosure(false)


    const openArray = [open1, open2, open3, open4]

    return (
        <>
            <Grid align={'center'} gutter="xs">
                <Grid.Col lg={12}>
                    <Title fz={50} sx={{ alignSelf: 'flex-end' }}> About</Title>
                </Grid.Col>
                {
                    Array.from(Array(4)).map((_, index) =>

                        <Grid.Col key={index} lg={6} sm={6} >
                            {
                                matches ?
                                    <ScrollFadeIn >
                                        <Image openArray={openArray} index={index} />
                                    </ScrollFadeIn>
                                    : <ScrollFadeLeft>
                                        <Image openArray={openArray} index={index} />
                                    </ScrollFadeLeft>

                            }
                        </Grid.Col>
                    )
                }
            </Grid>
        </>
    )
}
