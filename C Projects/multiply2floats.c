#include <stdio.h>
int main() {
    double a, b, product;
    printf("Enter two numbers: ");
    scanf("%lf %lf", &a, &b);

    product = a * b;

    printf("Product = %.2fl", product);

    return 0;
}