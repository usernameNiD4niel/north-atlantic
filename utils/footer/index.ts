export type BottomNavProps = {
    src: string,
    label: string,
    alt: string,
    isActve: boolean
}

const BottomNavData: BottomNavProps[] = [
    { src: "src/assets/home.svg", label: "Home", alt: "Home Image", isActve: true },
    { src: "src/assets/building-store.svg", label: "ABCD", alt: "ABCD Image", isActve: false },
    { src: "src/assets/archive.svg", label: "MENU", alt: "MENU Image", isActve: false },
    { src: "src/assets/user.svg", label: "ACCOUNT", alt: "ACCOUNT Image", isActve: false },
]

export default BottomNavData;