import { Box, Card, Flex, Stack, Tabs, Title } from '@mantine/core';
import { useState } from 'react';
import SmsCampaignMessageTab from './SmsCampaignMessageTab';
import SmsCampaignSetupTab from './SmsCampaignSetupTab';
import SmsCampaingVerifyTab from './SmsCampaingVerifyTab';
import SmsCampaignPreview from './SmsCampaignPreview';

const SmsCampaignPage = () => {
  const [activeTab, setActiveTab] = useState<string | null>('message');

  const [campaignDetails, setCampaignDetails] = useState({ name: '', message: '', orginator: 'smsinfo', mobile: '' })

  const handleFormData = (name: string, value: string) => {
    setCampaignDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Stack>
      <Title order={3} className="pageTitle">Campaign</Title>
      <Card padding="xl" withBorder radius={"md"}>
        <Flex gap={"3.5rem"} wrap={'wrap'}>
          <Tabs defaultValue="message" value={activeTab} onChange={setActiveTab} style={{ flexGrow: 1 }}>
            <Tabs.List >
              <Tabs.Tab value="message" mx={{ lg: "xl" }}>Message</Tabs.Tab>
              <Tabs.Tab value="setup" mx={{ lg: "xl" }}>Contacts & Schedule</Tabs.Tab>
              <Tabs.Tab value="verify" mx={{ lg: "xl" }}>Verify</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="message" p={{ sm: 0, md: "md" }} pt={"xl"}>
              <SmsCampaignMessageTab
                handleFormData={handleFormData}
                campaignDetails={campaignDetails}
                setActiveTab={setActiveTab}
              />
            </Tabs.Panel>
            <Tabs.Panel value="setup" p={{ sm: 0, md: "md" }} pt={"xl"}>
              <SmsCampaignSetupTab campaignDetails={campaignDetails} handleFormData={handleFormData} setActiveTab={setActiveTab}/>
            </Tabs.Panel>
            <Tabs.Panel value="verify" p={{ sm: 0, md: "md" }} pt={"xl"}>
              <SmsCampaingVerifyTab />
            </Tabs.Panel>
          </Tabs>
          <Box w={{ xs: "100%", lg: "30%" }}>
            <SmsCampaignPreview campaignDetails={campaignDetails} />
          </Box>
        </Flex>

      </Card>
    </Stack>
  )
}

export default SmsCampaignPage