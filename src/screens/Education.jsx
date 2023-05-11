import { Title } from '@mantine/core'
import React from 'react'
import { ScrollFadeIn } from '../components/Animated/ScrollFadeIn'
import { TaskCard, hkust } from '../components/TaskCard'

export const Education = () => {
    return (
        <>
            <Title fz={50}>Education</Title>
            <ScrollFadeIn >

                <TaskCard data={hkust} />
                {/* <TaskCard data={itBootCamp} /> */}
            </ScrollFadeIn>

        </>
    )
}
