// https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/
// 礼物的最大价值
// 在一个 m*n 的棋盘的每一格都放有一个礼物，
// 每个礼物都有一定的价值（价值大于 0）。
// 你可以从棋盘的左上角开始拿格子里的礼物，
// 并每次向右或者向下移动一格、直到到达棋盘的右下角。
// 给定一个棋盘及其上面的礼物的价值，
// 请计算你最多能拿到多少价值的礼物？

// 思想：动态规划
// dp[i][j] 表示到达[i][j]的位置所拿到的礼物价值
// 有多种计算路径
