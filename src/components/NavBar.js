import React, { useContext } from "react";
import { Flex, Icon, Image, Text, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../Context/shopContext";
import { MdOutlineMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      background="#FFA8E2"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdOutlineMenu}
        w={30}
        h={30}
        onClick={() => openMenu()}
      />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          w={100}
          h={100}
        ></Image>
      </Link>

      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingCart}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
