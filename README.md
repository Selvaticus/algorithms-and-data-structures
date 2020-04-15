# What is this

This is my output as I followed alont the *Javascripts Algorithms and Data Structures* udemy class.

This repo contains my implementations of the data structures and algortithms presented in class, as well as the exercices presented in the class for practice.

## Setup

Only two things are needed to verify this work:

* NodeJs
* yarn

Run `yarn install` to install **jest**.

Run `yarn test` to check all the implementations of the algorithms and data structures.

*Note:* If you use `asdf` you can quickly instal nodejs by running `asdf install`

## Structure

There isn't a hard defined structure for this repo, just a grouping of related algos/structures per folder.

Check [exercices](./exercices/README.md) for most practice exercises

### Sort

The `sort` folder contains most sort algorithms:

* Selection Sort
* Bubble Sort
* Insert Sort
* Merge Sort
* Quick Sort
* Merge Sort

*Note: Also contains helper functions and structures*

### Stack

The `stack` folder contains the `Stack` data structure.

### Search

The `search` folder contains the `Binary Search` algorithm along a naive serve for comparison

### Recursion

The `recursion` folder contains simple implementations for problems using recursion

### Queue

The `queue` folder contains the `Queue` data structure.

### Binary Heap

The `binary_heap` folder contains the `Binary Heap` data structure, with implementations for min and max binary heaps.

### Binary Search Tree

The `binary_search_tree` contains the `Binary Search Tree` data structure, the **depth first search** algorithm (**pre-order**, **post-order**, **in-order**) and the breath first algorithm. Also shows a generator performing dfs in-order, to enumerate the tree into an ordered array.

### Doubly Linked List

The `doubly_linked_list` containst the `Doubly Linked List` data structure.

### Singly Linked List

The `singly_linked_list` containst the `Singly Linked List` data structure.

### Graphs

The `graph` folder contains the base representation of:

* Simple Graph
* Weighted Graph

Also containst algotithms for:

* Depth First Search (in this case traversal)
* breath First Search (in this case traversal)
* Dijkstra. For SSSP (Single Source Shortest Path), applied to find tge shortest path between 2 vertices.