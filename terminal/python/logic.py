from choice import playerChoice,cmpChoice

def determine_winner(player_choice, comp_choice):
    if player_choice == comp_choice:
        return "draw"
    elif (player_choice == 1 and comp_choice == 3) or \
         (player_choice == 2 and comp_choice == 1) or \
         (player_choice == 3 and comp_choice == 2):
        return "win"
    else:
        return "lose"

def gameLogic(player, choice, compChoice,score,compScore):
    if 1 <= choice <= 3:
        result = determine_winner(choice, compChoice)
        if result == "draw":
            print("The match is Draw")
        elif result == "win":
            score+=1
            print(f"{player} Won")
        else:
            compScore+=1
            print(f"You lost the match {player}")
        print(f"Your score: {score}\nComputer Score: {compScore}") 
    else:
        print("Invalid Choice")
    return score,compScore

def playAgain():
    while True:
        print("Do you want to play another game?")
        print("1. Yes\n2. No\n")
        try:
            playAgain=int(input("Your choice: "))
        except(ValueError):
            print("Please enter the proper option")
            continue
        if playAgain != 1:
            return False
        else:
            return True

def game(player):
    score=0
    compScore=0
    j=True
    while j:
        print("Your Options:")
        print("1. Rock")
        print("2. Paper")
        print("3. Scissors")
        choice=playerChoice()
        compChoice=cmpChoice()
        score,compScore=gameLogic(player,choice,compChoice,score,compScore)
        j=playAgain()