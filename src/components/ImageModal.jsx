import { useMediaQuery } from '@mantine/hooks';
import { Modal, Image, useMantineTheme, Stack, Grid, Text } from '@mantine/core';

import ReactImageMagnify from 'react-image-magnify';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export function ImageModal({ opened, open, close, image, index }) {
    const theme = useMantineTheme();
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);
    return (
        <>
            <Modal opened={opened} onClose={close} size={'90vw'} centered
                withCloseButton={false}
            >
                <Grid >
                    <Grid.Col lg={6}>
                        {
                            matches ?
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: image
                                    },
                                    largeImage: {
                                        src: image,
                                        width: 2000,
                                        height: 2000
                                    }
                                }} />
                                :
                                <TransformWrapper>
                                    <TransformComponent>
                                        <Image src={image} alt='cat1' withPlaceholder />
                                    </TransformComponent>
                                </TransformWrapper>


                        }
                    </Grid.Col>
                    {
                        matches ?
                            <Grid.Col lg={6} >
                                <Stack mt={20} align='center' sx={{ justifyItems: 'center' }}>

                                    {/* <Paper style={{ flex: 1 }} shadow={'xl'}> */}

                                    <Text>If you want to see the detail, please move your mouse on the kitten</Text>
                                    {/* </Paper> */}

                                </Stack>

                            </Grid.Col> : <></>

                    }
                </Grid>


            </Modal>

        </>
    );
}