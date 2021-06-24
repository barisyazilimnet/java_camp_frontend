import React, { useState, useEffect } from "react";
import { Table, Menu, Icon, Button } from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün adı</Table.HeaderCell>
            <Table.HeaderCell>Birim fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.productId}>
              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.productUnitPrice}</Table.Cell>
              <Table.Cell>{product.productUnitsInStock}</Table.Cell>
              <Table.Cell>{product.productQuantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)} primary>
                  Sepete ekle
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
