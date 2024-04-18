using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class añadirTablaReservas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservation_Classes_ClassesId",
                table: "Reservation");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservation_GymMembers_GymMemberId",
                table: "Reservation");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservation",
                table: "Reservation");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "41e2edae-ecc1-4589-bdb8-ed70f7df2160");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ba9de70-4abe-4568-b788-849dad3efbbb");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "AspNetUsers");

            migrationBuilder.RenameTable(
                name: "Reservation",
                newName: "Reservations");

            migrationBuilder.RenameIndex(
                name: "IX_Reservation_GymMemberId",
                table: "Reservations",
                newName: "IX_Reservations_GymMemberId");

            migrationBuilder.RenameIndex(
                name: "IX_Reservation_ClassesId",
                table: "Reservations",
                newName: "IX_Reservations_ClassesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "75df8e7e-e9df-431e-b5df-8c1766a4fb3e", null, "User", "USER" },
                    { "cf00d8b9-ca48-46c1-9c78-dfff57eff791", null, "Instructor", "INSTRUCTOR" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Classes_ClassesId",
                table: "Reservations",
                column: "ClassesId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_GymMembers_GymMemberId",
                table: "Reservations",
                column: "GymMemberId",
                principalTable: "GymMembers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Classes_ClassesId",
                table: "Reservations");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_GymMembers_GymMemberId",
                table: "Reservations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "75df8e7e-e9df-431e-b5df-8c1766a4fb3e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cf00d8b9-ca48-46c1-9c78-dfff57eff791");

            migrationBuilder.RenameTable(
                name: "Reservations",
                newName: "Reservation");

            migrationBuilder.RenameIndex(
                name: "IX_Reservations_GymMemberId",
                table: "Reservation",
                newName: "IX_Reservation_GymMemberId");

            migrationBuilder.RenameIndex(
                name: "IX_Reservations_ClassesId",
                table: "Reservation",
                newName: "IX_Reservation_ClassesId");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservation",
                table: "Reservation",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "41e2edae-ecc1-4589-bdb8-ed70f7df2160", null, "User", "USER" },
                    { "5ba9de70-4abe-4568-b788-849dad3efbbb", null, "Instructor", "INSTRUCTOR" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Reservation_Classes_ClassesId",
                table: "Reservation",
                column: "ClassesId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservation_GymMembers_GymMemberId",
                table: "Reservation",
                column: "GymMemberId",
                principalTable: "GymMembers",
                principalColumn: "Id");
        }
    }
}
