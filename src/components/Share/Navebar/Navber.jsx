import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import NavbarItems from "./NavbarItems";

const Navber = () => {
    return (
        <div className="fixed w-full bg-opacity-30 bg-black text-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <Logo></Logo>
                        <NavbarItems></NavbarItems>

                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navber;