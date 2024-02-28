import { Stack, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  imagePosition?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  image,
  imagePosition = "center center",
}) => {
  return (
    <Stack
      width="100vw"
      height="50vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: imagePosition,
      }}
    >
      <Typography component="h2" variant="h2" color="white" textAlign="center">
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          component="p"
          variant="h4"
          fontWeight="normal"
          color="white"
          mt={2}
          textAlign="center"
        >
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
};

export default PageHeader;
