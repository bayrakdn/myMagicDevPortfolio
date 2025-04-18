import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";

// ✅ Define your custom homepage content
const customHome = {
  headline: "Electrical Engineer & AI Developer",
  subline: "Hi, I'm Deniz — passionate about control systems, embedded software, and building smart systems.",
};

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {customHome.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {customHome.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src="/deniz.JPG"
                  size="m"
                />
                About Deniz
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
