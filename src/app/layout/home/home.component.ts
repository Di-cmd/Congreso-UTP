import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  organizadores: any[] = [
    {
      name: "Milton Humberto",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor, ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
    {
      name: "Yeniffer",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor,ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
    {
      name: "Yeniffer",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor,ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
    {
      name: "Yeniffer",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor,ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
    {
      name: "Yeniffer",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor,ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
    {
      name: "Yeniffer",
      image: "comite.jpg",
      descripcion:
        "Este poeta hijo de inmigrantes italianos que buscaba hablar de amor y compromiso político de la manera más directa y apasionada posible, es famoso por el estilo directo de sus versos de amor,ira y resistencia. Benedetti alcanzó su punto máximo como »",
    },
  ];


  Tematicas: any[] = [
    {
      name: "Materiales",
      image: "termografia.jpg"
    },
    {
      name: "Termografia medica",
      image: "termografia.jpg"
    },
    {
      name: "Termografia de materiales",
      image: "termografia.jpg"
    },
    {
      name: "Milton Humberto",
      image: "termografia.jpg"
    },
  ];
}
