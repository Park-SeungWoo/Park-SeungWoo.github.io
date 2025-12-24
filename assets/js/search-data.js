// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-回顧-2025",
        
          title: "回顧 2025",
        
        description: "Reflection of this year 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/reflection2025/";
          
        },
      },{id: "books-큰-뜻을-품은-자여-왜-그-자리에-머물러-있는가",
          title: '큰 뜻을 품은 자여, 왜 그 자리에 머물러 있는가',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/big_dream/";
            },},{id: "books-유닉스의-탄생",
          title: '유닉스의 탄생',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_birth_of_unix/";
            },},{id: "books-turing-39-s-vision-the-birth-of-computer-science",
          title: 'Turing&amp;#39;s vision - The birth of Computer Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/turing_s_vision/";
            },},{id: "news-beginning-of-this-blog-smile-rocket",
          title: 'Beginning of this blog!! :smile: :rocket:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%6D%64%32%34%37%31%30@%67.%73%6B%6B%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Park-SeungWoo", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/win_wooooooo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
