import random

def generateChoice():
    return random.randint(1,3)

def playerChoice():
    while True:
        try:
            choice=int(input("Your choice: "))
            return choice
        except(ValueError):
            print("Please enter the proper option")
            continue

def cmpChoice():
    compChoice=generateChoice()
    print("Computer chose rock") if compChoice == 1 else print("Computer chose paper") if compChoice == 2 else print("Computer chose scissors")
    return compChoice