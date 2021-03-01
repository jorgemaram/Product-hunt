import React from 'react';
import Layout from '../components/layouts/Layout'
import styled from '@emotion/styled';

const Heading = styled.h1`
color:red;
`;

const NuevoProducto = () => {
    return (
        <div>
            <Layout>
                <Heading>Nuevo Producto</Heading>
            </Layout>
        </div>
    )
}
export default NuevoProducto