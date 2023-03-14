import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper style={{ backgroundColor: "rgba(244,180,0,0.3)" }}>
      <FlexBetween>
        <Typography color={dark} variant="h4" fontWeight="500">
          Insights
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://img.freepik.com/premium-vector/woman-computer-tell-good-review-online-service_10498-96.jpg?w=2000"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main} variant="h5">See who’s viewed your profile</Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      When someone views your profile, it suggests that they’re interested in your professional experience. Follow up with profile viewers by asking to connect or sending an InMail.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;