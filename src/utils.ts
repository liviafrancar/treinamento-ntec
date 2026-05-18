// problema 1

export interface User { // vai ser importado um objeto "User"
    name: string;
    age: number;
    active: boolean;
}

export const validUsers = (users: User[]): User[] => {
    return users
    .filter((user: User) => user.age > 18 && user.active)
    .sort((a: User, b: User) => a.name.localeCompare(b.name));
}

// problema 3

export interface Product {
    name: string;
    price: number;
}

export const totalPrice = (products: Product[]): number => {
    return products.reduce((acc: number, product: Product) => acc + product.price, 0);
}

export const average = (products: Product[]): number => {
    return totalPrice(products) / products.length; // como aqui totalPrice é funçõa, é preciso chamá-la: totalPrice(products)
}

export const mostExpensive = (products: Product[]): Product => {
    return products.reduce((product1: Product, product2: Product) => {
        return product2.price > product1.price ? product2 : product1;
    })
}

export const discount = (products: Product[]): Product[] => {
    return products.map((product: Product): Product => {
        return {
            name: product.name,
            price: product.price * 0.9,
        };
    });
}

// problema 5

export interface Groups {
    [key: string]: object[];
}

export const groupBy = (array: object[], key: string): Groups => {
    return array.reduce((acumulador: Groups, objetoAtual: object) => {
        const caminho: string[] = key.split('.');
        const valorInterno: string = caminho.reduce((objetoAcumulador: unknown, chaveAtual: string) => {
            return (objetoAcumulador as Record<string, unknown>)[chaveAtual];
        }, objetoAtual as unknown) as string;
        if (!acumulador[valorInterno]) {
            acumulador[valorInterno] = [];
        }
        acumulador[valorInterno].push(objetoAtual);
        return acumulador;
    }, {});
}