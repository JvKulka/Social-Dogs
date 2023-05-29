import React from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComents from "./PhotoComents";

const PhotoContent = ({ data }) => {
  const { photo, coments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <div>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span className={styles.visualizacoes}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>{photo.peso} kg</li>
              <li>{photo.idade} anos</li>
            </ul>
          </div>
        </div>
      </div>
      <PhotoComents id={photo.id} coments={coments} />
    </div>
  );
};

export default PhotoContent;
