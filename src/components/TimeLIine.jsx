import { Timeline, Text, useMantineColorScheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useInView } from "framer-motion"
import { ScrollFadeLeft } from './Animated/ScollFadeLeft';
import { useRef, useState } from 'react';
import { buildKing, ensignFreight, innovationX, TaskCard } from './TaskCard';





export function TimeLine() {
    const [finalView, setFinalView] = useState(false);
    const hover1 = useHover();
    const hover2 = useHover();
    const hover3 = useHover();

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2)

    const ref3 = useRef(null)
    const isInView3 = useInView(ref3)

    const ref4 = useRef(null)
    const isInView4 = useInView(ref4)

    const activeFucn = () => {
        if (finalView) {
            return 3
        }
        if (isInView1) {
            return 1
        }
        if (isInView2) {
            return 2
        }
        if (isInView3) {

            return 3
        }

    }
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    // const dark = colorScheme === "dark";
    // const colorChange = colorScheme === "dark" ? "white" : "black";

    return (
        <Timeline active={activeFucn()}
            // bulletSize={24} lineWidth={2} color="gray"
            lineWidth={4} bulletSize={20}
        >

            <Timeline.Item
                //  bullet={<IconGitBranch size={12} />} 
                title="Developer" pb={30} ref={ref1} >
                <Text color="dimmed" size="sm">NOVEMBER  2022 - PRESENT</Text>
                <Text size="xs" mt={4}>Project-based</Text>
                <ScrollFadeLeft>
                    <TaskCard data={buildKing} />
                </ScrollFadeLeft>
            </Timeline.Item>

            <Timeline.Item
                // bullet={<IconGitCommit size={12} />} 
                title="Full Stack Developer" pb={30} ref={ref2}>

                <Text color="dimmed" size="sm">AUGUST  2022 - SEPTEMBER  2022</Text>
                <Text size="xs" mt={4}>Project-based</Text>
                <ScrollFadeLeft>
                    <TaskCard data={ensignFreight} />
                </ScrollFadeLeft>

            </Timeline.Item>

            <Timeline.Item title="Senior Research & Development Engineer"
                //  bullet={<IconGitPullRequest size={12} />}
                pb={30} ref={ref3}>
                <Text color="dimmed" size="sm">DECEMBER  2021 - FEBRUARY 2022</Text>
                <Text size="xs" mt={4}>Project-based</Text>
                <ScrollFadeLeft>
                    <TaskCard data={innovationX} />
                </ScrollFadeLeft>
            </Timeline.Item>

            <Timeline.Item
                // bullet={<IconMessageDots size={12} />}
                ref={ref4}
            >
                {/* {
                    isInView4 ?
                        <Title fz={50}>Education</Title> : <></>
                } */}

            </Timeline.Item>
        </Timeline>
    );
}