import { Avatar, Button, Card, Flex, Navbar, ScrollArea, Stack, Text, Transition, keyframes, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import React, { useState } from 'react'
import { ImageModal } from '../components/ImageModal';
import { HoverEnlarge } from '../components/Animated/HoverEnlarge';
import { IconButton } from '../components/IconButton';
import { useDisclosure, useMediaQuery, useScrollIntoView, useScrollLock } from '@mantine/hooks';
import { transform, useInView } from 'framer-motion';
import {
    BrandGithub,
    BrandInstagram,
    BrandLinkedin,

} from "tabler-icons-react";

import icon from "../assets/icon.jpg";
import { useSpring } from '@react-spring/web';

const isPhoneSize = (matches, a, b) => {
    const isVarient = (a, b) => {
        if (a && b) {
            return false
        }
        else if (a) {
            return true
        }
        else if (b) {
            return false
        }
    }
    if (matches) {
        return isVarient(a, b) ? 'filled' : 'outline'
    } else {
        return 'outline'
    }
}

// const isVarient = (a, b) => {
//     if (a && b) {
//         return false
//     }
//     else if (a) {
//         return true
//     }
//     else if (b) {
//         return false
//     }
// }

// const NavBarButton = ({ a, b, animation1, animation2, scrollIntoView, setOpened, text }) => {
//     return (
//         <Button
//             sx={{
//                 borderColor: 'black',
//                 color: (isVarient(a, b)) ? 'white' : 'black',
//                 backgroundColor: (isVarient(a, b)) ? 'black' : 'transparent',
//                 animationName: (isVarient(a, b)) ? animation1 : animation2,
//                 animationDuration: '0.4s',
//             }}

//             // variant={(isPhoneSize(matches, isInViewHome, isInview))}
//             // color={colorScheme === "dark" ? "gray" : "dark"}
//             onClick={() => {
//                 scrollIntoView();
//                 setOpened(false)
//                 // navigate('/home')
//             }}
//         >
//             {text}
//         </Button>
//     )
// }


export const NavBar = ({ opened, smMatches, handlers, colorScheme, iconSize, matches,
    isInViewHome, isInViewAbout, scrollIntoView3, setOpened, scrollAbout, isInViewEmployment, colorChange, isInViewEducation,
    scrollIntoView, scrollIntoView2
}) => {
    const animation1 = keyframes`
  0%   {background-color: white;}
 
  100% {background-color: black;}
`;
    const animation2 = keyframes`
  0%   {background-color: black;}
 
  100% {background-color: white;}
`;

    return (
        <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 250, lg: 250 }}
            h={'100vh'}

        >
            <ScrollArea h={'100vh'} w={smMatches ? 250 : 'auto'}>
                <Navbar.Section w={{ sm: 250, lg: 250 }}>
                    {/* Top */}
                    <Stack align={"center"} mt={30} >
                        <Card radius={1000} shadow={"lg"} sx={{ alignItems: "center" }}>
                            <Avatar
                                src={icon}
                                radius={1000}
                                size={150}
                                alt="Icon"
                                sx={{ marginBottom: 0 }}
                                onClick={handlers[1].open}
                            />
                            <ImageModal opened={handlers[0]} open={handlers[1].open} close={handlers[1].close} image={icon} index={undefined} />

                        </Card>

                        <Text fw={400} fz={20}>
                            Andy Wong
                        </Text>

                        <Flex
                            // w={{ sm: 200, lg: 250 }}
                            mb={40}
                            gap={4}
                            justify={"center"}
                        >
                            <HoverEnlarge>
                                <IconButton hef={"https://www.instagram.com/car_dryer/"}
                                    colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandInstagram} />
                            </HoverEnlarge>
                            <HoverEnlarge>
                                <IconButton hef={"https://www.linkedin.com/in/andy-wong-3378ab1b9/?original_referer="}
                                    colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandLinkedin} />
                            </HoverEnlarge>
                            <HoverEnlarge>
                                <IconButton hef={"https://github.com/wonghin/"}
                                    colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandGithub} />
                            </HoverEnlarge>
                        </Flex>
                    </Stack>
                </Navbar.Section>

                <Navbar.Section grow component={ScrollArea}>
                    <Stack
                        mx={"md"}
                    >
                        <Stack>
                            <Button
                                variant={(isPhoneSize(matches, isInViewHome, isInViewAbout))}
                                // color={colorScheme === "dark" ? "gray" : "dark"}
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView3();
                                    setOpened(false)
                                    // navigate('/home')
                                }}
                            >
                                Home
                            </Button>
                            <Button

                                variant={isPhoneSize(matches, isInViewAbout, isInViewEmployment)}
                                // color={colorScheme === "dark" ? "gray" : "dark"}
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollAbout();
                                    setOpened(false)
                                    // navigate('/about')

                                }}
                            >
                                About
                            </Button>
                            <Button
                                variant={isPhoneSize(matches, isInViewEmployment, isInViewEducation)}
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView();
                                    setOpened(false)
                                    // navigate('/employment')

                                }}
                            >
                                Employment
                            </Button>
                            <Button
                                variant={matches ? (isInViewEducation ? 'filled' : 'outline') : 'outline'}
                                color={colorScheme === "dark" ? "gray" : "dark"}
                                onClick={() => {
                                    scrollIntoView2();
                                    setOpened(false)

                                }}
                            >
                                Education

                            </Button>
                        </Stack>


                    </Stack>
                </Navbar.Section>

            </ScrollArea>

            <Navbar.Section mb={60}>
                <Stack align={"center"} spacing="xs">
                    <Text size={13}>
                        &copy; {new Date().getFullYear()} Copyright{' '}  by Andy Wong
                    </Text>
                </Stack>
            </Navbar.Section>


        </Navbar>
    )
}
