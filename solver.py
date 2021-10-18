testboard = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
]

def print_board(board):
    for i in range(len(board)):
        if i % 3 == 0 and i != 0: 
            print("--------------")
        for j in range(len(board[0])):
            if j%3 == 0 and j != 0: 
                print(" | ", end="")
                
            if j== 8: 
                print(board[i][j])
            else: 
                print(str(board[i][j])+" ", end="")

def find_empty_square(board): 
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] == 0:
                return (i,j)
    return None

def solve_board(board): 
    empty_square = find_empty_square(board)
    if not empty_square:
        return True
    else: 
        row, col = empty_square
        for i in range(1,10):
            if check_if_valid(i, (row,col), board):
                return True

def check_if_valid(num, pos, board): 
    for i in range(len(board[0])):
        if board[pos[0]][i] == num and pos[1] != i:
            return False

    for i in range(len(board)):
        if board[pos[1]][i] == num and pos[0] != i:
            return False

    x = pos[1] //  3
    y = pos[0] // 3 

    for i in range(y*3,y*3+3):
        for j in range(x*3,x*3+3):
            if board[i][j] == num and (i,j) != pos:
                return False    
    
    return True


print(find_empty_square(testboard))