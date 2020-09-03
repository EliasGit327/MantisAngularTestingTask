import { Component, OnInit } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

interface ITag {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.css']
})
export class TagsPageComponent implements OnInit {
  tags: ITag[] = [
    { id: '001', label: 'Anime'},
    { id: '002', label: 'Games'},
    { id: '003', label: 'TV Show'},
    { id: '004', label: 'Code Geass'},
    { id: '005', label: 'Shingeki no Kyojin'},
    { id: '006', label: 'Fullmetal Alchemist'},
  ];
  isEditMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }

  editBtnClick(): void {
    this.isEditMode = !this.isEditMode;
  }

  onChipClick(tag: ITag, menu: MatMenu): void {
    if (this.isEditMode) {
    }
  }
}
