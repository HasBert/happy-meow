{
  description = "A flake for the happy-meow project";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";
    # happy-meow.url = "github:kprinssu/happy-meow";
  };

  outputs = { self, nixpkgs }:
    let
      pkgs = import nixpkgs {
        system = "x86_64-linux";
      };
    in
    {
      packages.${pkgs.system} = rec { };

      devShells.${pkgs.system}.default = pkgs.mkShell {
        buildInputs = [ pkgs.coreutils pkgs.bashInteractive pkgs.nodejs_18 pkgs.yarn ];

        shellHook = ''

        '';
      };

    };
}
