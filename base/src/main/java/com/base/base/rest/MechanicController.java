package com.base.base.rest;

import com.base.base.mapper.MechanicMapper;
import com.base.base.mapper.UserMapper;
import com.base.base.model.User;
import com.base.base.rest.dto.MechanicDto;
import com.base.base.rest.dto.UserDto;
import com.base.base.service.MechanicService;
import com.base.base.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.base.base.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/mechanic")
public class MechanicController {

    private final MechanicService mechanicService;

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-mechanic")
    public ResponseEntity<MechanicDto> getMechanicById (@RequestParam Long mechanicID) {
        return ResponseEntity.ok(mechanicService.getMechanicByID(mechanicID));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping("/update-mechanic")
    public void updateMechanic (@RequestBody MechanicDto mechanicDto) {
        mechanicService.updateMechanic(mechanicDto);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/get-mechanics")
    public ResponseEntity<List<MechanicDto>> getAllMechanics () {
        return ResponseEntity.ok(mechanicService.getMechanics());
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PostMapping("/create-mechanic")
    public void createMechanic (@RequestBody MechanicDto mechanicDtoToCreate) {
        mechanicService.saveMechanic(mechanicDtoToCreate);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @DeleteMapping("/delete-mechanic")
    public void deleteMechanic (@RequestParam Long mechanicID) {
        mechanicService.deleteMechanic(mechanicID);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping("/rate-mechanic")
    public void rateMechanic (@RequestParam Long mechanicID, @RequestParam String mechanicRanking) {
        System.out.println("asd");
        mechanicService.rateMechanic(mechanicID, mechanicRanking);
    }
}
