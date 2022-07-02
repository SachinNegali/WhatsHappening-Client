import React from 'react';
import { Box, Text, Input, Stack, Button } from 'native-base'

const Login = ({ navigation }) => {

    return (
        <Stack justifyContent="center" flex="1" px="4" safeArea mt="4" w={{ base: "100%", md: "25%" }}>
            <Text bold fontSize="xl" mb="4" alignSelf="center">
                Get Started
            </Text>
            <Text fontSize="md" mb="2">
                Mobile Number
            </Text>
            <Input
                variant="rounded"
                fontSize="md"
                placeholder="Your 10 digit Mobile Number"
                InputLeftElement={<Text ml="2" fontSize="md">+91</Text>}
                type="number"
                keyboardType='number-pad'
            />
            <Box alignItems="center">
                <Button
                    mt="10"
                    borderRadius="20"
                    w="100%"
                    onPress={() => navigation.navigate('VerifyOtp')}
                >
                    Click Me
                </Button>
            </Box>
        </Stack>
    )
}

export default Login