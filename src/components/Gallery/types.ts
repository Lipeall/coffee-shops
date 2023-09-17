export interface GalleryContent  {
	img: string;
	title: string;
	description: string;
};
export interface GalleryProps {
    data: GalleryContent[];
}