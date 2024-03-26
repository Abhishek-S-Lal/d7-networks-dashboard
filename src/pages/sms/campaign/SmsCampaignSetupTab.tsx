import { Box, Button, Flex, NativeSelect, Stack, Text } from '@mantine/core'
import React from 'react'
import { TSmsCampaignFormProps } from './SmsCampaignMessageTab'
import PhoneInput from '../../../components/PhoneInput/PhoneInput'
import { DateInput } from '@mantine/dates'
import { isValidPhoneNumber } from 'react-phone-number-input'

const SmsCampaignSetupTab = ({ campaignDetails, handleFormData, setActiveTab }: TSmsCampaignFormProps) => {

  const { mobile } = campaignDetails;
  const isFormValid = () =>
    isValidPhoneNumber(mobile)

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    if (isFormValid()) setActiveTab("setup");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack gap={"xl"}>
        <PhoneInput
          value={campaignDetails.mobile}
          name="mobile"
          label="Receipient"
          onChange={(value) => handleFormData("mobile", value || "")}
        />
        <Box>
          <Text size='sm' fw={"400"}>Scheduling</Text>
          <Flex w={"100%"} gap={"lg"} wrap={"wrap"} mt={"xs"}>
            <DateInput
              onChange={(val) => handleFormData("date", new Date(val).getUTCDate().toString())}
              label="Date"
              description=' '
              style={{ flexGrow: 1 }}
              radius="md"
            />
            <NativeSelect
              size="sm"
              radius="md"
              label="Time Zone"
              // error="Please choose an orginator"
              onChange={(event) => handleFormData("timezone", event.currentTarget.value)}
              data={['+5.30 Asia, Calcutta']}
              style={{ flexGrow: 1 }}
              description=' '

            />
          </Flex>
        </Box>

        <Flex justify={"flex-end"} gap={"md"}>
          <Button variant="outline" radius="md">Prev</Button>
          <Button variant="filled" radius="md" type="submit" disabled={!isFormValid()}>Next</Button>
        </Flex>
      </Stack>
    </form>
  )
}

export default SmsCampaignSetupTab