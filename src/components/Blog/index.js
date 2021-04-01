// == Import
import React from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant

class Blog extends React.Component {
  constructor(props) {
    super(props);

    // on stocke les tâches à afficher dans le state, la valeur initiale est
    // le tableau qui est dans le fichier de données
    this.state = {
      posts: '',
      //categories: categories,
    };
  }

  // la méthode render retourne le JSX du composant
  render() {
    const { posts, categories } = this.state;

    return (
      <div className="blog">
        <Header catagories={categories} />
        <Posts posts={posts} />
        <Footer />
      </div>
    );
  }
}
export default Blog;
