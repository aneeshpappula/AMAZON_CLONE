#additin of numbers from a given number 
n=int(input("enter a number:"))
sum=0
while n>0:
    if n%2==0:
        rem=n%10
        sum+=rem
        n=n/10
print(sum)        