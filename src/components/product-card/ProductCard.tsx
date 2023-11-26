import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  styled,
  Rating,
  Box,
} from "@mui/material";

//Files
import { IProductItemProps } from "~/types/general";

//Components
import ProductCardButtons from "../product-card-buttons/ProductCardButtons";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 4,
  textAlign: "left",
  color: "rgb(43,52,69)",
}));

const FALLBACKIMG = "/FALLBACKIMG.webp";

export interface ProductCardProps extends IProductItemProps {}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  discount,
  image,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
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
          {discount}
        </Typography>
        <CardMedia
          component="img"
          height="50%"
          image={imageError ? FALLBACKIMG : image}
          alt="Product Image"
          style={{ backgroundColor: "rgb(239, 239, 239)" }}
          onError={handleImageError}
        />
        <CardContent
          sx={{
            display: "flex",
            gap: "6px",
            justifyContent: "space-between",
            paddingTop: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "6px",
              flexDirection: "column",
              paddingTop: "36px",
            }}
          >
            <Title variant="h3">{name}</Title>
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Rating
                name="star-rating"
                value={rating}
                precision={0.5}
                readOnly
                sx={{
                  fontSize: 20,
                }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                }}
              >
                ({rating})
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "6px" }}>
              <Typography sx={{ color: "rgb(210,63,87)", fontWeight: "500" }}>
                ${price.toFixed(2)}
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  textDecoration: "line-through",
                }}
              >
                ${originalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <ProductCardButtons />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
