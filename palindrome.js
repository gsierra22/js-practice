const Palindrome = (str)=>{
    const isPalindrome = str.split('').reverse().join('');
    console.log(str===isPalindrome);
}
Palindrome('tacocat');
Palindrome('need')