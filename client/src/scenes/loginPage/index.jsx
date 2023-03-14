import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#5EBC5E"//{theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontFamily="Titillium Web" fontWeight="bold" fontSize="32px" color="#ffffff">
          wecode;
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontFamily="Titillium Web" align="center" fontWeight="bold" variant="h4" color="#4285F4" sx={{ mb: "1.5rem" }}>
        "Developers dump droll discussions here"
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;