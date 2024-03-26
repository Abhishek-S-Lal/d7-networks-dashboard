import { Avatar, Card, Flex, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import classes from "./SmsCampaignPage.module.css"
import { TSmsCampaignFormProps } from './SmsCampaignMessageTab'

const SmsCampaignPreview = ({campaignDetails}:TSmsCampaignFormProps) => {
    return (
        <Flex mt={"xl"} direction={"column"} style={{minHeight:"390px"}} w={"100%"}>
            <Title ta={"center"} order={4} className={classes.smsPreviewTitle}>{`${campaignDetails?.name} SMS Preview`}</Title>
            <Card mt={"lg"} padding="lg" pt={"xl"} withBorder radius={"md"} style={{flexGrow:1}}>
                <Stack align='center' gap={"xs"}>
                    <Avatar color="#2b9dff" radius="xl" size={"lg"}></Avatar>
                    <Text>{campaignDetails?.orginator}</Text>
                </Stack>
                    {campaignDetails?.message && <Text mt={"3.5rem"} ml={0} className={classes.message}>{campaignDetails?.message}</Text>}
            </Card>
        </Flex>
    )
}

export default SmsCampaignPreview