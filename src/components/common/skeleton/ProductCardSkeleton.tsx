import { Card, CardContent, Typography, Skeleton, Grid } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ position: "relative" }}>
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "#fff",
            fontSize: 10,
            fontWeight: 600,
            backgroundColor: "rgb(210,63,87)",
            padding: "4px 12px",
            borderRadius: 50,
          }}
        >
          <Skeleton variant="text" width={40} height={10} animation="wave" />
        </Typography>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          animation="wave"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "12px",
          }}
        >
          <Skeleton variant="text" width="80%" height={20} animation="wave" />
          <Skeleton variant="text" width="50%" height={20} animation="wave" />
          <Skeleton variant="text" width="60%" height={20} animation="wave" />
          <Skeleton variant="text" width="80%" height={20} animation="wave" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCardSkeleton;
