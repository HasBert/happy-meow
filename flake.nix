{
  descriptionb = "A flake for the happy-meow project";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-21.05";
    # happy-meow.url = "github:kprinssu/happy-meow";
  };

  outputs = { self, nixpkgs }: {

    pkgs = nixpkgs.legacyPackages.${nixpkgs.system};


    devShell = pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs16
      ];
    };

  };
}
