using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class walletTale : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wallets_Users_UserNameId",
                table: "Wallets");

            migrationBuilder.DropIndex(
                name: "IX_Wallets_UserNameId",
                table: "Wallets");

            migrationBuilder.DropColumn(
                name: "UserNameId",
                table: "Wallets");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserNameId",
                table: "Wallets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Wallets_UserNameId",
                table: "Wallets",
                column: "UserNameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Wallets_Users_UserNameId",
                table: "Wallets",
                column: "UserNameId",
                principalTable: "Users",
                principalColumn: "NameId");
        }
    }
}
