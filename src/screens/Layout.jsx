import { useState } from "react";
import {
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    ActionIcon,
    Stack,
    Button,
    Group,
    Switch,
    useMantineColorScheme,
    Flex,
    Avatar,
    Card,
    ScrollArea,
    Anchor,
} from "@mantine/core";
import {
    IconMoonStars,
    IconSun,
} from "@tabler/icons-react";
import {
    useDisclosure,
    useElementSize,
    useMediaQuery,
    useScrollIntoView,

} from "@mantine/hooks";
import {
    BrandGithub,
    BrandInstagram,
    BrandLinkedin,

} from "tabler-icons-react";
import icon from "../assets/icon.jpg";
import { Content2 } from "./Contents/Content2";
import { useScrollLock } from '@mantine/hooks';
import { Outlet, useNavigate } from "react-router-dom";
import { create } from "zustand";
import { useInView } from "framer-motion";
import { ImageModal } from "../components/ImageModal";
import { IconButton } from "../components/IconButton";
import { HoverEnlarge } from "../components/Animated/HoverEnlarge";
import { NavBar } from "./NavBar";
import { HeaderComponent } from "./HeaderComponent";
export const useRefStore = create((set) => ({
    targetRef: {},
    setTargetRef: (ref) => set({ targetRef: ref }),
}))



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


export default function LayoutScreen() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const colorChange = colorScheme === "dark" ? "white" : "black";
    const iconSize = 40;

    const { targetRef, scrollIntoView } = useScrollIntoView({ offset: 60 });
    const { targetRef: refAbout, scrollIntoView: scrollAbout } = useScrollIntoView({ offset: 60 });
    const { targetRef: refEducation, scrollIntoView: scrollIntoView2 } = useScrollIntoView({ offset: 60 });
    const { targetRef: refHome, scrollIntoView: scrollIntoView3 } = useScrollIntoView({ offset: 120 });
    const { targetRef: targetRef4, scrollIntoView: scrollIntoView4 } = useScrollIntoView({ offset: 60 });

    const props = { targetRef, refEducation, refHome, targetRef4, refAbout }

    const isInViewHome = useInView(refHome)
    const isInViewAbout = useInView(refAbout)
    const isInViewEmployment = useInView(targetRef)
    const isInViewEducation = useInView(refEducation)

    useScrollLock(opened)
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);
    const handlers = useDisclosure(false);
    const smMatches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);


    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            // navbarOffsetBreakpoint="sm"
            // asideOffsetBreakpoint="sm"
            // layout="alt"
            navbar={
                <NavBar
                    opened={opened}
                    smMatches={smMatches}
                    handlers={handlers}
                    colorScheme={colorScheme}
                    iconSize={iconSize}
                    matches={matches}
                    isInViewHome={isInViewHome}
                    isInViewAbout={isInViewAbout}
                    scrollIntoView3={scrollIntoView3}
                    setOpened={setOpened}
                    scrollAbout={scrollAbout}
                    isInViewEmployment={isInViewEmployment}
                    colorChange={colorChange}
                    isInViewEducation={isInViewEducation}
                    scrollIntoView={scrollIntoView}
                    scrollIntoView2={scrollIntoView2} />
                // <Navbar
                //     hiddenBreakpoint="sm"
                //     hidden={!opened}
                //     width={{ sm: 250, lg: 250 }}
                //     h={'100vh'}

                // >
                //     <ScrollArea h={'100vh'} w={smMatches ? 250 : 'auto'}>
                //         <Navbar.Section w={{ sm: 250, lg: 250 }}>
                //             {/* Top */}
                //             <Stack align={"center"} mt={30} >
                //                 <Card radius={1000} shadow={"lg"} sx={{ alignItems: "center" }}>
                //                     <Avatar
                //                         src={icon}
                //                         radius={1000}
                //                         size={150}
                //                         alt="Icon"
                //                         sx={{ marginBottom: 0 }}
                //                         onClick={handlers[1].open}
                //                     />
                //                     <ImageModal opened={handlers[0]} open={handlers[1].open} close={handlers[1].close} image={icon} index={undefined} />

                //                 </Card>

                //                 <Text fw={400} fz={20}>
                //                     Andy Wong
                //                 </Text>

                //                 <Flex
                //                     // w={{ sm: 200, lg: 250 }}
                //                     mb={40}
                //                     gap={4}
                //                     justify={"center"}
                //                 >
                //                     <HoverEnlarge>
                //                         <IconButton hef={"https://www.instagram.com/car_dryer/"}
                //                             colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandInstagram} />
                //                     </HoverEnlarge>
                //                     <HoverEnlarge>
                //                         <IconButton hef={"https://www.linkedin.com/in/andy-wong-3378ab1b9/?original_referer="}
                //                             colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandLinkedin} />
                //                     </HoverEnlarge>
                //                     <HoverEnlarge>
                //                         <IconButton hef={"https://github.com/wonghin/"}
                //                             colorScheme={colorScheme} iconSize={iconSize} colorChange={colorChange} Icon={BrandGithub} />
                //                     </HoverEnlarge>
                //                 </Flex>
                //             </Stack>
                //         </Navbar.Section>

                //         <Navbar.Section grow component={ScrollArea}>
                //             <Stack
                //                 mx={"md"}

                //             >
                //                 <Stack>
                //                     <Button
                //                         variant={(isPhoneSize(matches, isInViewHome, isInViewAbout))}
                //                         color={colorScheme === "dark" ? "gray" : "dark"}
                //                         onClick={() => {
                //                             scrollIntoView3();
                //                             setOpened(false)
                //                             // navigate('/home')
                //                         }}
                //                     >
                //                         Home
                //                     </Button>
                //                     <Button

                //                         variant={isPhoneSize(matches, isInViewAbout, isInViewEmployment)}
                //                         // color={colorScheme === "dark" ? "gray" : "dark"}
                //                         color={colorScheme === "dark" ? "gray" : "dark"}
                //                         onClick={() => {
                //                             scrollAbout();
                //                             setOpened(false)
                //                             // navigate('/about')

                //                         }}
                //                     >
                //                         About
                //                     </Button>
                //                     <Button
                //                         variant={isPhoneSize(matches, isInViewEmployment, isInViewEducation)}
                //                         color={colorScheme === "dark" ? "gray" : "dark"}
                //                         onClick={() => {
                //                             scrollIntoView();
                //                             setOpened(false)
                //                             // navigate('/employment')

                //                         }}
                //                     >
                //                         Employment
                //                     </Button>
                //                     <Button
                //                         variant={matches ? (isInViewEducation ? 'filled' : 'outline') : 'outline'}
                //                         color={colorScheme === "dark" ? "gray" : "dark"}
                //                         onClick={() => {
                //                             scrollIntoView2();
                //                             setOpened(false)
                //                             // navigate('/education')

                //                         }}
                //                     >
                //                         Education
                //                     </Button>
                //                 </Stack>
                //                 {/* <Stack>
                //                 <Button
                //                     variant={matches ? (isInViewEducation ? 'filled' : 'outline') : 'outline'}
                //                     color={colorScheme === "dark" ? "gray" : "dark"}
                //                     onClick={() => {
                //                         scrollIntoView2();
                //                         setOpened(false)
                //                         navigate('/education')

                //                     }}
                //                 >
                //                     Education
                //                 </Button>
                //             </Stack> */}

                //             </Stack>
                //         </Navbar.Section>

                //     </ScrollArea>

                //     <Navbar.Section mb={60}>
                //         <Stack align={"center"} spacing="xs">
                //             <Text size={13}>
                //                 &copy; {new Date().getFullYear()} Copyright{' '}  by Andy Wong
                //             </Text>
                //         </Stack>
                //     </Navbar.Section>


                // </Navbar>
            }
            header={
                <HeaderComponent opened={opened} setOpened={setOpened} colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
                // <Header height={{ base: 60 }} p="md">
                //     <Group position="apart" align={"center"}>
                //         <Group>
                //             <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                //                 <Burger
                //                     opened={opened}
                //                     onClick={() => setOpened((o) => !o)}
                //                     size="sm"
                //                     color={theme.colors.gray[6]}
                //                     mr="xl"
                //                 />
                //             </MediaQuery>
                //         </Group>
                //         <Group w={50} h={30}>
                //             <Switch
                //                 checked={colorScheme === 'dark' ? true : false}
                //                 onLabel={<IconSun size="1.1rem" />}
                //                 offLabel={<IconMoonStars size="1.1rem" />}
                //                 onClick={() => toggleColorScheme()}
                //             />
                //         </Group>
                //     </Group>
                // </Header>

            }


        >
            <Content2 targetRef={props} />
            <Outlet />
        </AppShell>
    );
}
