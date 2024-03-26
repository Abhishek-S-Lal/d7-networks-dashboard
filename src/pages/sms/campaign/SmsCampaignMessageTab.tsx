import { Button, Flex, NativeSelect, Stack, TextInput, Textarea } from '@mantine/core';

export type TSmsCampaignFormProps = {
    campaignDetails: { name: string, orginator: string, message: string, mobile: string }
    handleFormData: (name: string, value: string) => void;
    setActiveTab: (tab: string) => void
};

const SmsCampaignMessageTab = ({ handleFormData, campaignDetails, setActiveTab }: TSmsCampaignFormProps) => {
    const { name, orginator, message } = campaignDetails;
    const isFormValid = () =>
        name !== "" &&
        name.length >= 3 &&
        orginator !== "" &&
        message !== ""

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        if (isFormValid()) setActiveTab("verify");
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <Stack gap={"xl"}>
                <Flex w={"100%"} gap={"lg"} wrap={"wrap"}>
                    <TextInput
                        size="sm"
                        radius="md"
                        label="Campaign Name"
                        // error="Please enter campaign name"
                        style={{ flexGrow: 1 }}
                        description=' '
                        onChange={(e) => handleFormData("name", e.target.value)}
                    />
                    <NativeSelect
                        size="sm"
                        radius="md"
                        label="Orginator"
                        // error="Please choose an orginator"
                        onChange={(event) => handleFormData("orginator", event.currentTarget.value)}
                        data={['SMSINFO']}
                        style={{ flexGrow: 1 }}
                        description=' '
                    />
                </Flex>
                <Textarea
                    size="sm"
                    radius="md"
                    label="Message"
                    description=" "
                    autosize
                    minRows={10}
                    onChange={(e) => handleFormData("message", e.target.value)}
                />
                <Flex justify={"flex-end"} gap={"md"}>
                    {/* <Button variant="outline" radius="md" onClick={()=>setActiveTab("verify")}>Prev</Button> */}
                    <Button variant="filled" radius="md" type="submit" disabled={!isFormValid()}>Next</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default SmsCampaignMessageTab