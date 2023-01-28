# Scratch Block Maker
Create blocks for custom scratch extensions easily
### The old way:
```js
{
    opcode: "ternary",
    blockType: Scratch.BlockType.REPORTER,
    text: "if [condition] then [yes] else [no]",
    arguments: {
        condition: {
            type: Scratch.ArgumentType.BOOLEAN
        },
        yes: {
            type: Scratch.ArgumentType.STRING,
            menu: "menu",
            defaultValue: "default"
        },
        no: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 0
        }
    }
}
```
### The new way:
```js
block("(ternary):if <condition> then [yes;menu;default] else (no;0)")
```
### Advantages:
- Small and fast
- Minimal boilerplate
- Easy to learn
- Flexible
