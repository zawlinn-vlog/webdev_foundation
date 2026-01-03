[![Webdev Foundation](https://img.shields.io/badge/Webdev_foundation_—-000?style=for-the-badge—=ko-fi—=white)](#)

> I'm Zaw Linn Tun a Frontend Web Developer on [Zawlinn - Vlog](https://www.youtube.com/@zawlinn-vlog). :heart:

<br>

## Projects &mdash;

<!-- ![Screenshot of Project](./s1.png) -->

What I use packages are &mdash;

[![My Skills](https://skillicons.dev/icons?i=html,css,js,jquery,bootstrap,git,vscode&perline=3)](https://skillicons.dev)

<br>

## CSS &mdash Layout &mdash;

1. Float
2. Flex - 1D
3. Grid - 2D

CSS layout system ကို သိမို့အတွက်ဆို box model ကို နားလည်မို့ လိုအပ်ပါတယ်။

the total width of an element should be calculated like this:

```txt
Total element width = content width + left padding + right padding + left border + right border
```

The total height of an element should be calculated like this:

```txt
Total element height = content height + top padding + bottom padding + top border + bottom border
```

1. Float

element ကို float ဖိအောင် လုပ်ပေးပီး clear property နဲ့ တွဲသုံးပေးရတယ်

```scss
div {
  float: left; // right

  &::after {
    content: "";
    clear: both;
  }
}
```

2. Flex

Row OR Column တစ်ခုတည်း ကို စီမံချင်ရင် အသုံးများဆုံး

အသုံးများတဲ့နေရာ

1. Navbar

2. Card row

3. Center alignment

> 📌 Main axis / Cross axis concept အရေးကြီး

```scss
.main {
  display: flex;
  flex-direction: row; // row is default, column, row-reverse, column-reverse
  justify-content: flex-start; // flex-start is default, center, flex-end, space-between, space-around, space-evenly
  align-items: flex-start; // stretch is default, flex-start, center, flex-end, baseline
  align-content: stretch; // flex-start, flex-end, center, space-between, space-around,
  flex-wrap: nowrap; // nowrap is default, wrap

  flex-grow: 0; // 1, number;
  flex-basis: 10rem; // rem, em, px, %
  flex-shrink: 1; // 1 is default, 0

  flex-flow: row reverse; // row wrap, column wrap-reverse, column reverse;
}
```

## Shorthand

```scss
.main {
  flex: flex-grow flex-shrink flex-basis;
  flex-flow: flex-direction flex-wrap;
}
```

## CSS &mdash; GRID

Row + Column နှစ်ဖက်လုံး ကို တပြိုင်နက် ထိန်းချုပ်နိုင်

## 📌 အသုံးများတဲ့နေရာ

1. Website main layout
2. Dashboard
3. Complex UI

### 🔥 ဘယ် Layout ကို ဘယ်အချိန် သုံးမလဲ?

| အလုပ်                      | သင့်တော်    |
| -------------------------- | ----------- |
| Navbar / Button alignment  | Flexbox     |
| Page structure / Dashboard | Grid        |
| Floating text + image      | Float       |
| Fixed header / popup       | Position    |
| Responsive design          | Flex + Grid |

## 💡 အကျဉ်းချုပ်

- Flexbox → 1D layout
- Grid → 2D layout
- Position → Exact placement
- Responsive → Media Query မဖြစ်မနေ

<br/>

[![Webdev Foundation](https://img.shields.io/badge/webdev_foundation-000?style=for-the-badge&logo=ko-fi&logoColor=white)](#)

📫 Reach me out!

[![Facebook Badge](https://img.shields.io/badge/-@saram_info-1ca0f1?style=flat&labelColor=1ca0f1&logo=facebook&logoColor=white&link=https://faebook.com/saram_info)](https://facebook.com/saram.info)
[![youtube Badge](https://img.shields.io/badge/-zawlinn_vlog-c0392b?style=flat&labelColor=c0392b&logo=youtube&logoColor=white)](https://youtube.com/@zawlinn-vlog)
[![Gamil Badge](https://img.shields.io/badge/-zawlinn.profile-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:zawlinn.profile@gmail.com)

<!-- TODO: Add last video link -->

<details>
    <summary>
        My Portfolio
    </summary>
    <br/>

- :earth_asia: I’m currently working at @Mae Sot Market as a sale staff
- :computer: Most used line of code git commit -m "Initial Commit"
- :brain: I’m looking for help with Outstanding Video ideas.
- :mailbox_with_mail: How to reach me: zawlinn.profile@gmail.com.
- :heart: In a relationship with React
</details>
