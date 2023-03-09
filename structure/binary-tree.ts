class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


class BinaryTree {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    public levelorder_traverse(): Array<number> {
        return BinaryTree.levelorder_travese(this.root)
    }

    public preorder_traverse(): Array<number> {
        return BinaryTree.preorder_traverse(this.root)
    }

    public inorder_traverse(): Array<number> {
        return BinaryTree.inorder_traverse(this.root)
    }

    public postorder_traverse(): Array<number> {
        return BinaryTree.postorder_traverse(this.root)
    }

    // TODO: Create tree from array by levelorder.
    public static from_array(nums: Array<number>): BinaryTree {
        if (nums.length === 0) {
            return new BinaryTree()
        }

        let tree = new BinaryTree()

        tree.root = new TreeNode(nums[0])
        tree.root.left = new TreeNode(nums[2])
        tree.root.right = new TreeNode(nums[1])

        return tree
    }

    public static levelorder_travese(root: TreeNode | null): Array<number> {
        if (root === null) {
            return []
        }

        let ans: Array<number> = []
        let queue: Array<TreeNode> = [root]

        while (queue.length > 0) {
            let curr = queue.shift()!
            ans.push(curr.val)

            if (curr.left !== null) queue.push(curr.left)
            if (curr.right !== null) queue.push(curr.right)
        }

        return ans
    }

    public static preorder_traverse(root: TreeNode | null): Array<number> {
        let ans: Array<number> = []

        let helper = function (root: TreeNode | null) {
            if (root === null) {
                return []
            }

            helper(root.left)
            ans.push(root.val)
            helper(root.right)
        }

        helper(root)

        return ans
    }

    public static inorder_traverse(root: TreeNode | null): Array<number> {
        let ans: Array<number> = []

        let helper = function (root: TreeNode | null) {
            if (root === null) {
                return []
            }

            helper(root.left)
            helper(root.right)
            ans.push(root.val)
        }

        helper(root)

        return ans
    }

    public static postorder_traverse(root: TreeNode | null): Array<number> {
        let ans: Array<number> = []

        let helper = function (root: TreeNode | null) {
            if (root === null) {
                return []
            }

            ans.push(root.val)
            helper(root.left)
            helper(root.right)
        }

        helper(root)

        return ans
    }
}

function TestBinaryTree() {
    const tree = BinaryTree.from_array([1, 2, 3])
    let ans = tree.levelorder_traverse()
    console.log(ans)
}

TestBinaryTree()