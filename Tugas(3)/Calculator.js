const calculator = (operator, ...numbers) => {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        
        switch (operator) {
            case '+': result += numbers[i];
                break;
            case '-': result -= numbers[i];
                break;
            case '*': result *= numbers[i];
                break;
            case '/': result /= numbers[i];
                break;
            case '%': result %= numbers[i];
                break;
            default:
                return 'Error';
        }
    }
    
    return result;
};

console.log(calculator('+', 25, 25)); 
console.log(calculator('-', 20, 2, 3)); 
console.log(calculator('*', 2, 3, 5)); 
console.log(calculator('/', 100, 5)); 
console.log(calculator('%', 10, 3)); 